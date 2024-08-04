import { db } from "./db";

async function main() {
  const users = await db.query.User.findMany();
  console.log(users);
}

main();
