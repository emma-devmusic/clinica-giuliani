import CountUp from "react-countup"
type CounterUpType = {
    end: number,
}
export const CounterUp = ({end}: CounterUpType) => {

    return (
        <CountUp start={0} end={end} >
            {({ countUpRef }) => (
                <div>
                    <h2 className="text-white mb-1" data-toggle="counter-up" ref={countUpRef as React.RefObject<HTMLDivElement>} />
                </div>
            )}
        </CountUp>
    )
}
