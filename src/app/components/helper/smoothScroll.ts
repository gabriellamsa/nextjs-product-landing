export const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute('href');
  if (!targetId) return;
  
  const targetElement = document.querySelector(targetId);
  if (!targetElement) return;

  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}; 