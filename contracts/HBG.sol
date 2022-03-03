//SPDX-License-Identifier: None

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HBG is ERC20{

    constructor() ERC20("Hero Book Game Token","HBG"){
        _mint(msg.sender, 1000000000000000000000000000);
    }

}