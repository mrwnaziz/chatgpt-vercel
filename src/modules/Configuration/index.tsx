import { FC, useContext } from 'react';
import GlobalContext from '@contexts/global';
import ConfigIcon from '@components/ConfigIcon';
import { GlobalConfig, ReactSetState } from '@interfaces';
import { Divider, Input, Select, Slider, Switch, Tooltip } from 'antd';
import {
  defaultConversation,
  globalConfigLocalKey,
  supportedImgSizes,
  supportedLanguages,
  supportedModels,
} from '@configs';

interface ConfigurationProps {
  setActiveSetting: ReactSetState<boolean>;
  setConfigs: ReactSetState<Partial<GlobalConfig>>;
}

const Configuration: FC<ConfigurationProps> = ({
  setActiveSetting,
  setConfigs,
}) => {
  const { i18n, configs, setConversations, setCurrentId } =
    useContext(GlobalContext);

  const updateConfigsAndStorages = (updates: Partial<GlobalConfig>) => {
    const newConfigs = { ...configs, ...updates };
    setConfigs(newConfigs);
    localStorage.setItem(globalConfigLocalKey, JSON.stringify(newConfigs));
  };

  return (

  );
};

export default Configuration;
