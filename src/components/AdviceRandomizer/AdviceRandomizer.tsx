import Button from "components/Button/Button";
import { AdviceCard, AdvicesContainer, RandomAdvicesWrapper, ErrorBlock, AdviceText } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { v4 } from "uuid";
import Spinner from "components/Spinner/Spinner";
import { randomAdviceSelectors, randomAdviceActions } from "store/redux/adviceRandomizer/adviceRandomizerSlice";

function AdviceRandomizer() {
  const { data, error, status } = useAppSelector(randomAdviceSelectors.adviceData)
  const dispatch = useAppDispatch();
console.log(data);

  const advices = data.map((advice) => {
    return <AdviceText key={v4()}>{advice}</AdviceText>
  })

  const getAdvice = () => {
    dispatch(randomAdviceActions.getAdvice())
  }

  const deleteAdvice = () => {
    dispatch(randomAdviceActions.deleteAdvice())
  }

  return (
    <RandomAdvicesWrapper>
      <AdviceCard>
        <Button name='GET ADVICES' onClick={getAdvice} disabled={status === 'loading'}/>
        {status === 'loading' && <Spinner />}
        {error && <ErrorBlock>{error}</ErrorBlock>}
        <AdvicesContainer>
          {advices}
        </AdvicesContainer>
        <Button name='DELETE ADVICES' onClick={deleteAdvice} />
      </AdviceCard>
    </RandomAdvicesWrapper>
  )
}

export default AdviceRandomizer;