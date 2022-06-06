import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import AdminLayout from "../../layouts/AdminLayout";
import Toast from "../../utils/Toast";
import Button from "../../shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { AdminState } from "../../constants/interfaces";
import { createArticle } from "../../slices/adminSlice";

const AdminPostArticle = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: AdminState) => state.admin);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    photo: "",
    description: "",
    body: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: any) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };
  const handleBodyChange = (text: string) => {
    setFormData({ ...formData, body: text });
  };

  const handlePublish = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.author ||
      !formData.photo ||
      !formData.description ||
      !formData.body
    ) {
      Toast("Please fill all the fields", "info");
      return;
    }

    let formdata = new FormData();
    formdata.append("title", formData.title);
    formdata.append("author", formData.author);
    formdata.append("photo", formData.photo);
    formdata.append("description", formData.description);
    formdata.append("body", formData.body);

    await dispatch(createArticle(formdata));
    setFormData({
      title: "",
      author: "",
      photo: "",
      description: "",
      body: "",
    });
  };
  return (
    <AdminLayout>
      <form className='p-2' onSubmit={(e) => handlePublish(e)}>
        <p className='text-secondary text-center'>
          Article date is automatically set to todays date
        </p>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='title' className='form-label'>
            Enter Article title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Title'
            className='form-control'
            value={formData.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mb-3 form-group w-50'>
          <label htmlFor='author' className='form-label'>
            Enter Article author name
          </label>
          <input
            type='text'
            name='author'
            id='author'
            placeholder='Author'
            className='form-control'
            value={formData.author}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className='mb-3 form-group w-50'>
          <label htmlFor='image' className='form-label'>
            Select Article display image
          </label>
          <input
            type='file'
            name='image'
            id='image'
            accept='image/*'
            className='form-control'
            onChange={(e) => handleImageChange(e)}
          />
        </div>
        <div className='mb-3 form-group w-50'>
          <textarea
            name='description'
            id='text'
            cols={60}
            rows={5}
            placeholder='Preview text'
            className='bg-light form-control'
            value={formData.description}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className='w-75'>
          <Editor
            apiKey='3i6uyqg8xp5acqtlcd6i6liqcwdfae67pkhixi393epj5ef1'
            textareaName='content'
            value={formData.body}
            init={{
              height: 300,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={(text) => handleBodyChange(text)}
          />
        </div>
        <div className='mt-3'>
          <Button
            title='submit'
            primary
            disabled={loading}
            loading={loading}
            rounded
          />
        </div>
      </form>
    </AdminLayout>
  );
};

export default AdminPostArticle;
