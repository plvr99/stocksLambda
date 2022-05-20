"use strict";
import handleProductRequest from "./adapters/ProductsRequestsAdapter.js";

export async function router(event) {
  console.log(event);
  const res = await handleProductRequest(event);
  return res;
}
