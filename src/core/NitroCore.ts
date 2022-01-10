import { AssetManager } from './asset/AssetManager';
import { IAssetManager } from './asset/IAssetManager';
import { Disposable } from './common/disposable/Disposable';
import { CommunicationManager } from './communication/CommunicationManager';
import { ICommunicationManager } from './communication/ICommunicationManager';
import { ConfigurationManager } from './configuration/ConfigurationManager';
import { IConfigurationManager } from './configuration/IConfigurationManager';
import { INitroCore } from './INitroCore';
import { NitroVersion } from './NitroVersion';

export class NitroCore extends Disposable implements INitroCore
{
    private _configuration: IConfigurationManager;
    private _communication: ICommunicationManager;
    private _asset: IAssetManager;

    constructor()
    {
        super();

        window.console.log.apply(console, [
            `\n%c       _   ___ __              \n      / | / (_) /__________    \n     /  |/ / / __/ ___/ __ \\   \n    / /|  / / /_/ /  / /_/ /   \n   /_/ |_/_/\\__/_/   \\____/    \n                               \n Thanks for using Nitro        \n To report bugs or issues      \n join us on Discord            \n https://nitrots.co/discord    \n                               \n Renderer: v${ NitroVersion.RENDERER_VERSION }              \n UI: v${ NitroVersion.UI_VERSION }                    \n                               \n`,
            'color: #FFFFFF; background: #000000; padding:0px 0;' ]);

        this._configuration = new ConfigurationManager();
        this._communication = new CommunicationManager();
        this._asset         = new AssetManager();
    }

    protected onDispose(): void
    {
        if(this._asset)
        {
            this._asset.dispose();

            this._asset = null;
        }

        if(this._communication)
        {
            this._communication.dispose();

            this._communication = null;
        }
    }

    public get configuration(): IConfigurationManager
    {
        return this._configuration;
    }

    public get communication(): ICommunicationManager
    {
        return this._communication;
    }

    public get asset(): IAssetManager
    {
        return this._asset;
    }
}
