import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  //https://zqidvjjxsoxofigdexri.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  //use Math.random to ensure that image name is unique
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  //1. create/edit a cabin
  let query = supabase.from("cabins");

  //A)create
  if (!id) query= query.insert([{ ...newCabin, image: imagePath }]);

  //B)Edit
  if (id) query=query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }


  //2. upload image
  if(hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //3. Deleting a cabin if there an error on uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data[0].id);
    console.error(error);
    throw new Error("Image could not be uploaded and cabin was not created");
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
}
