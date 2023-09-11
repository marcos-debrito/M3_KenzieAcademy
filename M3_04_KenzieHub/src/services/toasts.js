import { toast } from "react-hot-toast";

export const toastSuccess = (phrase) => {
  toast.success(phrase, {
    style: {
      borderRadius: "6px",
      background: "#333",
      color: "#fff",
    },
  });
};

export const toastError = (phrase) => {
  toast.error(phrase.toString(), {
    style: {
      borderRadius: "6px",
      background: "#333",
      color: "#fff",
    },
  });
};

export const toastLogout = () => {
  toast("Saíndo da conta...", {
    style: {
      borderRadius: "6px",
      background: "#333",
      color: "#fff",
    },
  });
};
