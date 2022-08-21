

import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import Layout from './Layout'
import {useEffect, useState} from 'react'

import Dante, {darkTheme, defaultTheme, defaultPlugins} from '../packages/dante3/src' //'../packages/dante3'
import jsonContent from "../packages/dante3/src/data/content";
//import {Readme as demo} from '../data/poc'

import {version} from '../packages/dante3/package.json'


export default function Index({ }) {
  const [theme, setTheme] = useState(defaultTheme)
  const [mode, setMode] = useState('light')
  const [fixed, setFixed] = useState(false)

  useEffect(()=>{
    setTheme(mode === 'light' ? defaultTheme : darkTheme)
  }, [mode])

	const morePlugins = [
		...defaultPlugins, 
	]

  let ydoc = new Y.Doc()
  // Registered with a WebRTC provider
  let provider = new WebrtcProvider('example-document', ydoc)

  console.log(morePlugins)

  return (
    <Layout 
      version={version}
      theme={theme} 
      setTheme={setTheme} 
      mode={mode}
      setMode={setMode}>
      
      <div className={`sm:mx-10 mx-2 py-8 ${mode}`} 
        heme={theme}>
        <div>
          <div className={`sm:w-3/4 sm:p-10 p-2 md:mx-auto shadow-md- bg-gray-50- dark:bg-black light`}>

            {/*<button
              className="inline-flex items-center px-6 py-3 border 
              border-transparent text-base font-medium rounded-md shadow-sm
                text-white bg-indigo-600 hover:bg-indigo-700 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={(e)=> onClick( mode === 'dark' ? 'light' : 'dark'  ) }>
              {mode === 'dark' ? 'light mode' : 'dark mode'}
            </button>*/}

            <Dante 
              widgets={morePlugins}
              theme={theme}
              fixed={fixed}
              content={jsonContent}
              extensions={[
                Collaboration.configure({
                  document: ydoc,
                }),
                CollaborationCursor.configure({
                  provider: provider,
                  name: 'Cyndi Lauper',
                  color: '#f783ac',
                })
              ]}
              /*widgets={[
                ImageBlockConfig(),
                CodeBlockConfig(),
                EmbedBlockConfig(),
                VideoBlockConfig(),
                PlaceholderBlockConfig(),
                DividerBlockConfig(),
                VideoRecorderBlockConfig()
              ]}*/
              style={{}}
              read_only={false}
              data_storage={ 
                {
                  interval: 10000,
                  save_handler: (context, content)=>{
                    //console.log(context, content)
                  }
                }
              }
            />
          </div>
        </div>
      </div>


    </Layout>
  )
}
