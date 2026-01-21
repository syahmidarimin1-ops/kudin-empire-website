import { NextResponse } from "next/server";

function generateVendorId(shopName: string) {
  // Tukar nama kedai → format kemas
  const cleanName = shopName
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "") // buang space & simbol
    .slice(0, 8); // hadkan panjang

  // Nombor rawak 4 digit
  const random = Math.floor(1000 + Math.random() * 9000);

  return `${cleanName}-${random}`;
}

export async function POST(req: Request) {
  const body = await req.json();

  const vendorId = generateVendorId(body.shopName);

  const vendor = {
    vendor_id: vendorId,
    name: body.name,
    phone: body.phone,
    shopName: body.shopName,
    address: body.address,
    createdAt: new Date(),
  };

  console.log("NEW VENDOR:", vendor);

  return NextResponse.json({
    success: true,
    vendorId,
  });
}
