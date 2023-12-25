import {Triangle} from "react-loader-spinner";

export const Loader = () => {
    return (
        <Triangle
            visible={true}
            height="80"
            width="80"
            color="#850A36"
            ariaLabel="triangle-loading"
            wrapperStyle={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}
        />
    );
};
