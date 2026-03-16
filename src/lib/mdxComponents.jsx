function mergeClassName(existingClassName, className) {
  if (existingClassName && className) {
    return `${className} ${existingClassName}`.trim();
  }

  return existingClassName ?? className;
}

export const mdxComponents = {
  h2: ({ className, ...props }) => <h2 className={className} {...props} />,
  h3: ({ className, ...props }) => <h3 className={className} {...props} />,
  p: ({ className, ...props }) => (
    <p className={mergeClassName(className, undefined)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote className={className} {...props} />
  ),
  ul: ({ className, ...props }) => <ul className={className} {...props} />,
  a: ({ className, ...props }) => <a className={className} {...props} />,
  code: ({ className, ...props }) => <code className={className} {...props} />,
};
