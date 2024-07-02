import React, { useMemo } from "react";
import { DefaultLayout } from "@components/default-layout";
import { Filters } from "@components/filters";
import { Store } from "@store/index";
import { selectFiltered } from "@store/selectors";
import { ProductCard } from "@components/product-card";
import { Grid, Skeleton, Button, Icon, EmptyState, Input, Select, IconClose } from "react-ck";

export const ProductsView = (): React.ReactElement => {
  const [filterQuery, setFilterQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string | undefined>();

  const productsCount = Store.products((state) => state.data.length);
  const productsList = selectFiltered(filterQuery);
  const categories = Store.categories.useData();
  const categoriesLoading = Store.categories.useLoading();
  const productsLoading = Store.products.useLoading();
  const loadCategories = Store.categories.useLoad();
  const loadProducts = Store.products.useLoad();
  const loading = useMemo(
    () => Boolean(categoriesLoading) || Boolean(productsLoading),
    [categoriesLoading, productsLoading],
  );

  React.useEffect(() => {
    void loadCategories();
  }, [loadCategories]);

  React.useEffect(() => {
    void loadProducts({
      category: selectedCategory,
    });
  }, [loadProducts, selectedCategory]);

  return (
    <DefaultLayout>
      <Filters>
        <Input
          type="search"
          placeholder="Search"
          value={filterQuery}
          onChange={(e): void => {
            setFilterQuery(e.target.value);
          }}
        />

        <Select
          defaultValue=""
          value={selectedCategory}
          onChange={(e): void => {
            setSelectedCategory(e.target.value.length > 0 ? e.target.value : undefined);
          }}>
          <Select.Option value="" disabled>
            Category
          </Select.Option>
          {categories.map((i) => (
            <Select.Option key={i}>{i}</Select.Option>
          ))}
        </Select>

        <Button
          skin="secondary"
          onClick={(): void => {
            setSelectedCategory("");
            setFilterQuery("");
          }}>
          <Icon Icon={IconClose} />
        </Button>
      </Filters>

      <Grid>
        {Boolean(loading) && (
          <>
            <Grid.Column size={2}>
              <Skeleton />
            </Grid.Column>
            <Grid.Column size={2}>
              <Skeleton />
            </Grid.Column>
            <Grid.Column size={2}>
              <Skeleton />
            </Grid.Column>
            <Grid.Column size={2}>
              <Skeleton />
            </Grid.Column>
          </>
        )}

        {!loading &&
          productsList.map(({ id }) => (
            <Grid.Column key={id} size={2}>
              <ProductCard id={id} />
            </Grid.Column>
          ))}
      </Grid>

      {productsCount > 0 && productsList.length === 0 && <EmptyState>No products found</EmptyState>}
    </DefaultLayout>
  );
};
