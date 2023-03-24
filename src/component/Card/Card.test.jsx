import { fireEvent, render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('<Card/>', () => {
  it('Should render a img', () => {
    render(<Card image="cover" />);
    const image = screen.getByRole('img', { image: /cover/i });
    expect(image).toBeInTheDocument();
  });
  it('Should render a heading with name', () => {
    render(<Card name="filme" />);
    const name = screen.getByRole('heading', { name: /filme/i });
    expect(name).toBeInTheDocument();
  });
  it('Should render a heading with year', () => {
    render(<Card year="2023" />);
    const year = screen.getByRole('heading', { year: /2023/i });
    expect(year).toBeInTheDocument();
  });
  it('Should call function onClick', () => {
    const fn = jest.fn();
    render(<Card name="filme" onClick={fn} />);

    const card = screen.getByRole('heading', { name: /filme/i });
    fireEvent.click(card);
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('should render Card correctly', () => {
    const fn = jest.fn();
    render(<Card name="nome" image="image.img" year="2023" onClick={fn} />);
    expect(screen.getByRole('img', { name: /nome/i })).toHaveAttribute('src');
  });
  it('Should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(
      <Card name="nome" image="image.img" year="2023" onClick={fn} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
