import React, { useState } from "react";

import { Button } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";

import { createPost } from "../../actions/posts";

import FileBase from "react-file-base64";

const Form = () => {
    const [postData, setPostData] = useState({ selectedFile: "" });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault(0);
        // console.log(postData);
        dispatch(createPost(postData));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setPostData({ ...postData, selectedFile: base64 })
                        }
                    />
                </div>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth>
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Form;
