import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

async function HomePage() {
  const products = await getProducts({ isFeatured: "true" });
  const billboard = await getBillboard("4823ce4e-4c75-4632-ae26-ffa9b0b3b0da");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div>
        <h2 className="flex flex-col gap-y-8 ps-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </h2>
      </div>
    </Container>
  );
}

export default HomePage;
