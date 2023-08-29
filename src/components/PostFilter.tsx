import React from 'react';
import Select from "../UI/Select/Select";

interface PostFilterProps {
    filter:{sort:string};
    setFilter:(newFilter:{sort:string}) => void;
}
const PostFilter:React.FC<PostFilterProps> = ({filter, setFilter}) => {
    return (
        <div style={{flex:1}}>
            <Select value={filter.sort} onChange={selectedSort => setFilter({...filter, sort: selectedSort})} defaultValue='Choose one'  options={[
                {value:'title', title: 'name'},
                {value:'body', title: 'description'},
            ]}/>
        </div>
    );
};

export default PostFilter;