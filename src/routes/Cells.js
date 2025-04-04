import React from 'react';
import { TextContent } from '@patternfly/react-core';
import PropTypes from 'prop-types';

export const Name = ({ name }) => <TextContent>{name}</TextContent>;

export const LastExecutedCell = ({ playbook_runs }) => (
  <TextContent>{playbook_runs ? playbook_runs[0].created_at : 0} </TextContent>
);

export const ExecutionStatusCell = ({ playbook_runs }) => (
  <TextContent>{playbook_runs ? playbook_runs[0].status : 0} </TextContent>
);

export const ActionsCell = ({ issue_count }) => (
  <TextContent>{issue_count} </TextContent>
);

export const SystemsCell = ({ system_count }) => (
  <TextContent>{system_count} </TextContent>
);

export const CreatedCell = ({ created_at }) => (
  <TextContent>{created_at} </TextContent>
);

export const LastModifiedCell = ({ updated_at }) => (
  <TextContent>{updated_at} </TextContent>
);

Name.propTypes = {
  name: PropTypes.string,
};
LastExecutedCell.propTypes = {
  playbook_runs: PropTypes.object,
};
ExecutionStatusCell.propTypes = {
  playbook_runs: PropTypes.string,
};
ActionsCell.propTypes = {
  issue_count: PropTypes.number,
};
SystemsCell.propTypes = {
  system_count: PropTypes.number,
};
CreatedCell.propTypes = {
  created_at: PropTypes.string,
};
LastModifiedCell.propTypes = {
  updated_at: PropTypes.string,
};
