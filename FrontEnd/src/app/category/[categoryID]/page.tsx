import ProductGrid from "@/components/common/features/product/ProductGridCategory";
import { ROUTES } from "@/constants";
import CategoryContent from "./CategoryContent";




export default async function CasualPage({
  params,
  searchParams,
}: {
  params: Promise<{ categoryID: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { categoryID } = await params;
  const { page } = await searchParams;
  return (
    <CategoryContent
      categoryID={categoryID}
      page={Number(page) || 1}
    />
  );
}
