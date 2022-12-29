function mapKeys(wvOptions, options, map) {
  Object.keys(map).forEach(val => {
    if (wvOptions[val]) {
      options[map[val]] = wvOptions[val]
    }
  })
}

function WVComponent(wvOptions) {
  const options: WechatMiniprogram.Component.Options<Data, Props, Methods> = {}

  mapKeys(wvOptions, options, {
    properties: 'properties',
    data: 'data',
    observers: 'observers',
    methods: 'methods',
    behaviors: 'behaviors',
    created: 'created',
    attached: 'attached',
    ready: 'ready',
    moved: 'moved',
    detached: 'detached',
    relations: 'relations',
    externalClasses: 'externalClasses',
    options: 'options',
    lifetimes: 'lifetimes',
    pageLifetimes: 'pageLifetimes',
  })

  options.behaviors = options.behaviors || []

  const {relation} = wvOptions
  if (relation) {
    options.relations = relation.relations
    options.behaviors.push(relation.behaviors)
  }

  Component(options)
}

export {WVComponent}
