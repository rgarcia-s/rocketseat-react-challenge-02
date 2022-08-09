import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  gap: 2rem;

  max-width: 90rem;
  margin: 2.5rem auto 0;

  h4 {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.3;

    margin-bottom: 1rem;
  }

  main {
    width: 40rem;
  }

  aside {
    width: 28rem;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  margin-bottom: 0.75rem;

  background: ${(props) => props.theme['base-card']};
`

export const AsideContentContainer = styled(ContentContainer)`
  border-radius: 6px 44px;
`

export const ContentContainerTitle = styled.div``
