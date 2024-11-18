import { getSaleInvoiceById } from "@/actions/SaleInvoice";
import SaleInvoicePDF from "@/components/custom/SaleInvoice/SaleInvoicePDF";

const Page = async ({ params }) => {
  const { id } = await params;
  const invoiceData = await getSaleInvoiceById(id);
  console.log(invoiceData);

  return <SaleInvoicePDF invoiceData={invoiceData} />;
};

export default Page;
