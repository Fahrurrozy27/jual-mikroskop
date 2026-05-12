"use server";

export async function submitLeadAction(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const companyName = formData.get("companyName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const interestedProduct = formData.get("interestedProduct") as string;
    const unitCount = formData.get("unitCount") as string;
    const rawMessage = formData.get("message") as string;

    let message = rawMessage;
    if (unitCount) {
      message = `Estimasi Jumlah: ${unitCount} unit\n\n${rawMessage}`;
    }

    // Simulasi penyimpanan atau pengiriman email (karena backend ditiadakan)
    console.log("New Lead Submitted:", { name, companyName, email, phone, interestedProduct, message });

    return { success: true };
  } catch (error) {
    console.error("Error submitting lead:", error);
    return { success: false, error: "Gagal mengirim permintaan. Silakan coba lagi nanti." };
  }
}
