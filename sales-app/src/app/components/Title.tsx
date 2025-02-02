type TitleProps = {
    text: string;
}

const Title: React.FC<TitleProps> = ({text}) =>{
    return <h1>{text}</h1>;
};
export default Title;

//const App: React.FC<AppProps> = ({ message }) => <div>{message}</div>;
// or const App = ({ message }: AppProps) => <div>{message}</div>;