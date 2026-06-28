import CategoryContent from "./[categoryID]/CategoryContent";


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