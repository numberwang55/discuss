"use server"

export async function createTopic(formData: FormData) {
  // TODO: revalidate homepage
  const name = formData.get("name")
  const description = formData.get("description")

  
}