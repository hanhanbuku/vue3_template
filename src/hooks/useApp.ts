import { reactive, getCurrentInstance, Ref } from "vue"
import { useRoute, useRouter } from "vue-router"

// 快捷注册ref获取dom或者组件
export function useRefs() {
  const refs = reactive<{ [key: string]: any }>({})
  function setRefs(name: string) {
    return (el: any) => {
      refs[name] = el
    }
  }

  return { refs, setRefs }
}

export function useParent(name: string, r: Ref) {
  const d = getCurrentInstance()

  if (d) {
    let parent = d.proxy?.$.parent

    if (parent) {
      while (parent && parent.type?.name != name) {
        parent = parent?.parent
      }

      if (parent) {
        if (parent.type.name == name) {
          r.value = parent.exposed
        }
      }
    }
  }

  return r
}

export function useApp() {
  return {
    router: useRouter(),
    route: useRoute(),
    ...useRefs(),
    app: getCurrentInstance()?.root,
  }
}
