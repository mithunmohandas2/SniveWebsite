import { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';

const CountingComponent = ({ start, end, duration }: { start: number, end: number, duration: number }) => {
    const [isVisible, setIsVisible] = useState(false);
    const countUpRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(countUpRef.current!);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={countUpRef}>
            {isVisible &&
                <div className="flex">
                    <CountUp start={start} end={end} duration={duration} />
                    %
                </div>
            }
        </div>
    );
};

export default CountingComponent;
