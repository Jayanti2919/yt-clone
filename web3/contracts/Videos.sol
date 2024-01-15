// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

contract MyContract {
    struct Video {
        address author;
        string title;
        string description;
        string[5] tags;
        string videoHash;
        string thumbnailHash;
    }
    mapping(uint => Video) public videos;
    mapping(address => uint[]) public author_VidId;
    uint public videoCount = 0;

    function uploadVideo(string memory _title, string memory _description, string[5] memory _tags, string memory _videoHash, string memory _thumbnail) public returns (uint) {
        require(bytes(_title).length!=0, "Title cannot be empty");
        require(bytes(_videoHash).length!=0, "VideoHash cannot be empty");

        videos[videoCount] = Video(msg.sender, _title, _description, _tags, _videoHash, _thumbnail);
        videoCount++;

        // author_VidId[msg.sender]=

        return videoCount-1;
    }

    function getVideo(address _author) public view returns (Video[] memory){
        Video[] memory _videos = new Video[](videoCount);
        for(uint i = 0; i < videoCount; i++) {
            if(videos[i].author == _author) {
                _videos[i] = videos[i];
            }
        }
        return _videos;
    }

    function getVideo(uint _id) public view returns (Video memory) {
        return videos[_id];
    }

    function deleteVideo(uint _id) public {
        delete videos[_id];
    }
}