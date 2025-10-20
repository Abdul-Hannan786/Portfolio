import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const ReviewSubmission = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.target);
    const image = data.get("image");

    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "my_unsigned_preset");

      const cloudinaryResponse = await fetch(
        "https://api.cloudinary.com/v1_1/dsgrazgwe/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const cloudinaryData = await cloudinaryResponse.json();
      const downloadURL = cloudinaryData.secure_url;

      const reviewData = {
        reviewerName: data.get("name"),
        reviewerPicture: downloadURL,
        review: data.get("review"),
      };

      await addDoc(collection(db, "reviews"), reviewData);
      toast.success("Review added successfully!");
    } catch (error) {
      console.error("Error adding review: ", error.message || error);
      toast.error("Failed to add review. Please try again.");
    } finally {
      setLoading(false);
      e.target.reset();
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl shadow dark:border sm:max-w-lg md:max-w-5xl xl:p-0 dark:bg-gray-800 dark:border-gray-700 font-gilroy mx-auto">
      <div className="p-6 md:p-8">
        <h1 className="text-xl md:text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white mb-4 text-left">
          Submit a Review
        </h1>
        <form className="flex flex-wrap gap-4" onSubmit={handleSubmit}>
          <div className="flex-1 min-w-[200px]">
            <label
              htmlFor="reviewerName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Reviewer Name
            </label>
            <input
              type="text"
              name="name"
              id="reviewerName"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <label
              htmlFor="reviewerPicture"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Reviewer Picture
            </label>
            <input
              type="file"
              name="image"
              id="reviewerPicture"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="review"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Review
            </label>
            <textarea
              name="review"
              id="review"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {loading ? "Submitting" : "Submit Review"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ReviewSubmission;
