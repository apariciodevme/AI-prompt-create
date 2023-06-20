"use client";

import { useState } from "react";
import { UseSession } from "next-auth/react";



import { useRouter } from "next/router";



import Form from "@components/Form";

const CreatePrompt = () => {
    const [submitting, setsubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    })

    const createPrompt = async (e) => {
      e.preventDefault();

      setsubmitting(true);

      try {
const response = await fetch('/api/prompt/new', {
  method: 'POST',
  body: JSON.stringify({
    prompt: post.prompt,
  })
})
      } catch (error) {

      }
    }


  return (
    <div className="flex flex-col items-center">
    <Form
    type="Create"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={createPrompt}
    
    />
    </div>
  );
};

export default CreatePrompt;
