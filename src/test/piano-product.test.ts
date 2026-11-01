import { describe, expect, it } from "vitest";
import { product, steps } from "@/lib/piano-product";

describe("Piano do Zero product rules", () => {
  it("costs 2.500 Kz", () => expect(product.priceKz).toBe(2500));
  it("has six stages", () => expect(steps).toHaveLength(6));
  it("is a PDF", () => expect(product.format).toBe("PDF"));
  it("keeps checkout in preview", () => expect(product.checkoutMode).toBe("preview"));
  it("requires approval for payments", () => expect(product.paymentsRequireApproval).toBe(true));
});