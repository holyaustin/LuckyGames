// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

// Import schema type
import { SchemaType } from "@latticexyz/schema-type/src/solidity/SchemaType.sol";

// Import store internals
import { IStore } from "@latticexyz/store/src/IStore.sol";
import { StoreSwitch } from "@latticexyz/store/src/StoreSwitch.sol";
import { StoreCore } from "@latticexyz/store/src/StoreCore.sol";
import { Bytes } from "@latticexyz/store/src/Bytes.sol";
import { Memory } from "@latticexyz/store/src/Memory.sol";
import { SliceLib } from "@latticexyz/store/src/Slice.sol";
import { EncodeArray } from "@latticexyz/store/src/tightcoder/EncodeArray.sol";
import { Schema, SchemaLib } from "@latticexyz/store/src/Schema.sol";
import { PackedCounter, PackedCounterLib } from "@latticexyz/store/src/PackedCounter.sol";

bytes32 constant _tableId = bytes32(abi.encodePacked(bytes16(""), bytes16("Guess")));
bytes32 constant GuessTableId = _tableId;

library Guess {
  /** Get the table's schema */
  function getSchema() internal pure returns (Schema) {
    SchemaType[] memory _schema = new SchemaType[](1);
    _schema[0] = SchemaType.UINT32;

    return SchemaLib.encode(_schema);
  }

  function getKeySchema() internal pure returns (Schema) {
    SchemaType[] memory _schema = new SchemaType[](4);
    _schema[0] = SchemaType.UINT32;
    _schema[1] = SchemaType.ADDRESS;
    _schema[2] = SchemaType.UINT32;
    _schema[3] = SchemaType.UINT32;

    return SchemaLib.encode(_schema);
  }

  /** Get the table's metadata */
  function getMetadata() internal pure returns (string memory, string[] memory) {
    string[] memory _fieldNames = new string[](1);
    _fieldNames[0] = "value";
    return ("Guess", _fieldNames);
  }

  /** Register the table's schema */
  function registerSchema() internal {
    StoreSwitch.registerSchema(_tableId, getSchema(), getKeySchema());
  }

  /** Register the table's schema (using the specified store) */
  function registerSchema(IStore _store) internal {
    _store.registerSchema(_tableId, getSchema(), getKeySchema());
  }

  /** Set the table's metadata */
  function setMetadata() internal {
    (string memory _tableName, string[] memory _fieldNames) = getMetadata();
    StoreSwitch.setMetadata(_tableId, _tableName, _fieldNames);
  }

  /** Set the table's metadata (using the specified store) */
  function setMetadata(IStore _store) internal {
    (string memory _tableName, string[] memory _fieldNames) = getMetadata();
    _store.setMetadata(_tableId, _tableName, _fieldNames);
  }

  /** Get value */
  function get(uint32 id, address wallet, uint32 randomness, uint32 playerinput) internal view returns (uint32 value) {
    bytes32[] memory _keyTuple = new bytes32[](4);
    _keyTuple[0] = bytes32(uint256((id)));
    _keyTuple[1] = bytes32(uint256(uint160((wallet))));
    _keyTuple[2] = bytes32(uint256((randomness)));
    _keyTuple[3] = bytes32(uint256((playerinput)));

    bytes memory _blob = StoreSwitch.getField(_tableId, _keyTuple, 0);
    return (uint32(Bytes.slice4(_blob, 0)));
  }

  /** Get value (using the specified store) */
  function get(
    IStore _store,
    uint32 id,
    address wallet,
    uint32 randomness,
    uint32 playerinput
  ) internal view returns (uint32 value) {
    bytes32[] memory _keyTuple = new bytes32[](4);
    _keyTuple[0] = bytes32(uint256((id)));
    _keyTuple[1] = bytes32(uint256(uint160((wallet))));
    _keyTuple[2] = bytes32(uint256((randomness)));
    _keyTuple[3] = bytes32(uint256((playerinput)));

    bytes memory _blob = _store.getField(_tableId, _keyTuple, 0);
    return (uint32(Bytes.slice4(_blob, 0)));
  }

  /** Set value */
  function set(uint32 id, address wallet, uint32 randomness, uint32 playerinput, uint32 value) internal {
    bytes32[] memory _keyTuple = new bytes32[](4);
    _keyTuple[0] = bytes32(uint256((id)));
    _keyTuple[1] = bytes32(uint256(uint160((wallet))));
    _keyTuple[2] = bytes32(uint256((randomness)));
    _keyTuple[3] = bytes32(uint256((playerinput)));

    StoreSwitch.setField(_tableId, _keyTuple, 0, abi.encodePacked((value)));
  }

  /** Set value (using the specified store) */
  function set(IStore _store, uint32 id, address wallet, uint32 randomness, uint32 playerinput, uint32 value) internal {
    bytes32[] memory _keyTuple = new bytes32[](4);
    _keyTuple[0] = bytes32(uint256((id)));
    _keyTuple[1] = bytes32(uint256(uint160((wallet))));
    _keyTuple[2] = bytes32(uint256((randomness)));
    _keyTuple[3] = bytes32(uint256((playerinput)));

    _store.setField(_tableId, _keyTuple, 0, abi.encodePacked((value)));
  }

  /** Tightly pack full data using this table's schema */
  function encode(uint32 value) internal view returns (bytes memory) {
    return abi.encodePacked(value);
  }

  /** Encode keys as a bytes32 array using this table's schema */
  function encodeKeyTuple(
    uint32 id,
    address wallet,
    uint32 randomness,
    uint32 playerinput
  ) internal pure returns (bytes32[] memory _keyTuple) {
    _keyTuple = new bytes32[](4);
    _keyTuple[0] = bytes32(uint256((id)));
    _keyTuple[1] = bytes32(uint256(uint160((wallet))));
    _keyTuple[2] = bytes32(uint256((randomness)));
    _keyTuple[3] = bytes32(uint256((playerinput)));
  }

  /* Delete all data for given keys */
  function deleteRecord(uint32 id, address wallet, uint32 randomness, uint32 playerinput) internal {
    bytes32[] memory _keyTuple = new bytes32[](4);
    _keyTuple[0] = bytes32(uint256((id)));
    _keyTuple[1] = bytes32(uint256(uint160((wallet))));
    _keyTuple[2] = bytes32(uint256((randomness)));
    _keyTuple[3] = bytes32(uint256((playerinput)));

    StoreSwitch.deleteRecord(_tableId, _keyTuple);
  }

  /* Delete all data for given keys (using the specified store) */
  function deleteRecord(IStore _store, uint32 id, address wallet, uint32 randomness, uint32 playerinput) internal {
    bytes32[] memory _keyTuple = new bytes32[](4);
    _keyTuple[0] = bytes32(uint256((id)));
    _keyTuple[1] = bytes32(uint256(uint160((wallet))));
    _keyTuple[2] = bytes32(uint256((randomness)));
    _keyTuple[3] = bytes32(uint256((playerinput)));

    _store.deleteRecord(_tableId, _keyTuple);
  }
}
