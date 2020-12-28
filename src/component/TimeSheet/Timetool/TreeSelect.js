import React from 'react';

import { TreeSelect } from 'antd';

const { TreeNode } = TreeSelect;

const treeSelect = (props) => {



    return (
        <React.Fragment>
            <TreeSelect
                showSearch
                style={{ width: '40%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Select contract-project"
                allowClear
                treeDefaultExpandAll
                multiple
                onChange={props.onChangeTreeNode}
            > <TreeNode value="parent 1" title="parent 1" style={{ fontWeight: 'bold', color: "#1890ff" }}>
                    <TreeNode value="parent 1-0" title="children0" />
                    <TreeNode value="parent 1-1" title="children1" />
                </TreeNode>
                <TreeNode value="parent 2" title="parent 2" style={{ fontWeight: 'bold', color: "#1890ff" }}>
                    <TreeNode value="parent 2-0" title="children0" />
                    <TreeNode value="parent 2-1" title="children1" />
                </TreeNode>
            </TreeSelect>
        </React.Fragment>

    );
};

export default treeSelect;