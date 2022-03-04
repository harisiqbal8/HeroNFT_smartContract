//SPDX-License-Identifier: None

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HBG is ERC20{

    constructor(address _owner) ERC20("Hero Book Game Token","HBG"){
        _mint(_owner, 1000000000000000000000000000);
    }

    function Mint() public{
        _mint(msg.sender, 1000000000000000000000000000);
    }
}