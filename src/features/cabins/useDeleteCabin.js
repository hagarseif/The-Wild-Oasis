import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export  function useDeleteCabin() {
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate : deleteCabin } = useMutation({
      mutationFn: (id) => deleteCabinApi(id),
      onSuccess: () => {
        ///to make the deletion without need to reload the page
        toast.success("cabin successfully deleted");
        queryClient.invalidateQueries({
          queryKey: ["cabin"],
        });
      },
      onError: (err) => toast.error(err.message),
    });
  return {isDeleting,deleteCabin}
}
