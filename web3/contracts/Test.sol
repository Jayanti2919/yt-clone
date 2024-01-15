// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract test{
    function getLen(string memory _str,uint a) public pure returns(uint){
        require(bytes(_str).length!=0,"Not empty plz");
        return bytes(_str).length;
    }
}