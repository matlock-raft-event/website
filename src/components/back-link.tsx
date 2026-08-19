type BackLinkProps = {
  href: string;
  label: string;
};

const BackLink = ({ href, label }: BackLinkProps) => (
  <div className="bg-cream pt-6">
    <div className="mx-auto w-full container px-4">
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
