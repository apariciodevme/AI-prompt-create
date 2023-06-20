import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="flex-col w-full max-w-full flex-start">
      <h1 className="text-left head_text">
        <span className="blue_gradient">
          {type}
          Post
        </span>
      </h1>
      <p className="max-w-md text-left desc">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-2xl mt-10 gap-7 glassmorphism"
      >
        <label>
          <span className="font-semibold text-gray-700 font-satoshi text0-base">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Type your prompt here"
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-semibold text-gray-700 font-satoshi text0-base">
            Tag{` `}
            <span className="font-normal">#product,</span>
          </span>

          <textarea
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#Tag"
            required
            className="form_input"
          />
        </label>

        <div className="gap-4 mx-3 mb-5 flex-end">
          <Link className="text-sm text-gray-500" href={"/"}>
            Cancel
          </Link>
        <button
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          type="submit"
          disabled={submitting}
          >
          {submitting ? `${type}...` : type}
        </button>
          </div>
      </form>
    </section>
  );
};

export default Form;
