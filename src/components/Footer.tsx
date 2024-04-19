import { LogoSVG } from './LogoSVG';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='mt-auto flex justify-center overflow-hidden border-t border-border/80 px-8 pb-12 max-md:pb-12 max-md:text-sm'>
      <div className='flex flex-col items-center text-center'>
        <LogoSVG className='-mb-14 -mt-10 size-52' />
        <span>© Todos os direitos reservados - {currentYear}</span>
        <span className='max-w-[500px] font-light'>
          Avenida 17 de Julho, 511 - Aterrado, Volta Redonda - RJ, 27213-200
        </span>
      </div>
    </footer>
  );
};
