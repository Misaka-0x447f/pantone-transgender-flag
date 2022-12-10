import styled from "styled-components";
import pantoneSvg from './assets/pantone.svg'

const ColorStripe = ({text, color, borderColor}: {text: string, color: string, borderColor?: string}) => {
  return <div className={'pt-2 pr-12 bg-white text-black flex-1 flex flex-col justify-center items-end'}>
    <img src={pantoneSvg} className={'w-60'}/>
    <div className={'flex pr-4 w-56 justify-between items-center'}>
      <span className={'w-8 h-8'} style={Object.assign({backgroundColor: color}, borderColor ? {outline: `${borderColor} 1px solid`} : {} )}></span>
      <span className={'text-4xl'}>{text}</span>
    </div>
  </div>
}

const Split = styled.div`
  background-color: #000;
  height: 12px;
  width: 100%;
`

function App() {
  return (
    <div className="flex flex-col" style={{width: 1536, height: 1024}}>
      <ColorStripe text={'2975 C'} color={'#99D9EA'} />
      <Split/>
      <ColorStripe text={'1767 C'} color={'#FFAEC9'} />
      <Split/>
      <ColorStripe text={'WHITE'} color={'#FFFFFF'} borderColor={'#888'} />
      <Split/>
      <ColorStripe text={'1767 C'} color={'#FFAEC9'} />
      <Split/>
      <ColorStripe text={'2975 C'} color={'#99D9EA'} />
    </div>
  )
}

export default App
