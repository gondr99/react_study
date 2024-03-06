export default function Tabs({children, buttons, ButtonsContainer = 'menu' })
{
    //반드시 대문자로
    //const ButtonsContainer = buttonsContainer;
    
    return (
    <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
    );
}