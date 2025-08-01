const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const email = "admin@example.com";

  const existingAdmin = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("admin123", 10);

    await prisma.user.create({
      data: {
        name: "Admin",
        email,
        password: hashedPassword,
        role: "superadmin", // pastikan enum RoleUser di schema.prisma mendukung 'superadmin'
      },
    });

    console.log("✅ Admin account created");
  } else {
    console.log("ℹ️ Admin account already exists");
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
