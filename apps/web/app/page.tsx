import { prisma } from "@repo/database";

const getOrders = async () => {
    const orders = await prisma.order.findMany();
    return orders;
};

const Home = async () => {
  const orders = await getOrders();

  console.log('Orders', orders);

  return (
     <div>
        <h1>Hello World</h1>
    </div>
  );
}

export default Home;
