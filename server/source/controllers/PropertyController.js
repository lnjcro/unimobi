import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  async craeteProperty(request, response) {
    try {
      const thumb = request.file.filename;
  
      const { id, name, email, telefone, tipo, endereco, cidade, uf, valor, descricao } = request.body;

      const user = await prisma.user.findUnique({ where: { id: Number(id) } });

      if (!user) {
        return response.json({ message: "Usuario inexistente" });
      }

      const slugify = str => 
        str
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '');

        const slug = slugify(tipo);

      const property = await prisma.property.create({
        data: {
          thumb,
          tipo,
          endereco,
          cidade,
          uf,
          valor,
          descricao,
          name, 
          email, 
          telefone,
          slug,
          userId: user.id,
        }
      });

      return response.json({
        error: true,
        message: "Sucesso: Imóvel cadastrado com sucesso!" ,
        property
      });

    } catch (error) {
      return response.json({ message: error.message });
    }
  },
  async findAllProperty(request, response) {
    try {

      const property = await prisma.property.findMany({
        include: {
          author: true,
        }
      });

      return response.json(property);

    } catch (error) {
      return response.json({ message: error.message });
    }
  },
  async findProperty(request, response) {
    try {
      const { slug } = request.params;

      const property = await prisma.property.findFirst({
        where: {
          slug: slug
        }
      });

      if (!property) {
        return response.json({ message: "Não encontramos nenhum imóvel cadstrado!" })
      }

      return response.json(property);

    } catch (error) {
      return response.json({ message: error.message })
    }
  },
  async createMessage(request, response) {
    try {
      const { name, email, messagem, userId } = request.body;

      const message = await prisma.message.create({
        data: {
          name, 
          email, 
          messagem, 
          userId
        }
      });

      return response.json(message);

    } catch (error) {
      return response.json({ message: error.message })
    }
  }
};