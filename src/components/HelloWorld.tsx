import clsx from 'clsx';

export type HelloWorldProps = {
  variant: 'gray' | 'red' | 'green' | 'blue';
};

export default function HelloWorld({ variant }: HelloWorldProps) {
  const wrapperClassName = clsx(
    'border p-8 rounded-xl mb-8',
    variant === 'gray' && 'bg-gray-100 border-gray-300',
    variant === 'red' && 'bg-red-100 border-red-300',
    variant === 'green' && 'bg-green-100 border-green-300',
    variant === 'blue' && 'bg-blue-100 border-blue-300'
  );
  const headlineClassName = clsx(
    'font-bold text-3xl tracking-tight',
    variant === 'gray' && 'text-gray-900',
    variant === 'red' && 'text-red-900',
    variant === 'green' && 'text-green-900',
    variant === 'blue' && 'text-blue-900'
  );
  const subHeadlineClassName = clsx(
    'mt-0 mb-4 text-xl',
    variant === 'gray' && 'text-gray-500',
    variant === 'red' && 'text-red-500',
    variant === 'green' && 'text-green-500',
    variant === 'blue' && 'text-blue-500'
  );
  const paragraphClassName = clsx('text-sm leading-6 text-gray-900');
  return (
    <div className={wrapperClassName}>
      <h1 className={headlineClassName}>Super Secret Hello World</h1>
      <h2 className={subHeadlineClassName}>How you doin?</h2>
      <p className={paragraphClassName}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus
        eget justo vitae molestie. In et metus at est dictum posuere sit amet
        vitae orci. Aenean non consectetur neque. Ut vel fermentum nulla. Cras
        id malesuada dui, vel iaculis augue. Nulla dapibus leo eget iaculis
        semper.
      </p>
    </div>
  );
}
