import { useEffect, useState } from 'react';
import Buttons from '../UI/Buttons/Buttons';
import './Swipper.scss';
import Swipper_Item from './SwipperItems/Swipper_Item';
interface ISwipper {
  albumId?: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl?: string;
}

const Swipper = ({ data }: { data: ISwipper[] }) => {
  const SWIPPER_WITH = 950;
  const lenthSlide = data.length - 1;
  const [currentSLide, setCurrentSlide] = useState<string>('0');
  const [activeSlide, setActiveSlide] = useState(0);
  const handleSlide = (id: number) => {
    setCurrentSlide(`-${SWIPPER_WITH * id}`);
    setActiveSlide(id);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlide(activeSlide === lenthSlide ? 0 : activeSlide + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className='swipper'>
      <div className='swipper__container'>
        <div className='swipper__items' style={{ transform: `translateX(${currentSLide}px)` }}>
          {data?.map(item => (
            <Swipper_Item id={item.id} title={item.title} key={item.id} width={SWIPPER_WITH} maxwidth={SWIPPER_WITH} />
          ))}
        </div>
      </div>
      {data.map((item, index) => (
        <Buttons onClick={() => handleSlide(index)} key={item.id} />
      ))}
    </div>
  );
};

export default Swipper;
