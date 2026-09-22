type BackLinkProps = {
  href: string;
  label: string;
};

const BackLink = ({ href, label }: BackLinkProps) => (
  <div className="bg-cream pt-6">
    {/* The Info pages it sits on all read at max-w-4xl, so it lines up with
        their page header title and the text below. */}
    <div className="mx-auto w-full max-w-4xl px-4">
      <a
        className="inline-flex items-center gap-1 font-label font-medium text-raft hover:underline"
        href={href}
      >
        <span aria-hidden="true">←</span>
        {label}
      </a>
    </div>
  </div>
);

export default BackLink;
