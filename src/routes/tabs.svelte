<script>
  import { Tab, Tabs, Image } from 'smelte';
</script>

<div style="max-width: 400px">
  <Tabs
    selected="1"
    class="bg-black elevation-10 mt-6 text-white rounded-t-lg"
    color="yellow-a200"
    let:selected={selected}
    items={[
      { id: "1", text: 'Cats', icon: 'alarm_on' },
      { id: "2", text: 'Kittens', icon: 'bug_report' },
      { id: "3", text: 'Kitties', icon: 'eject' },
    ]}>
    <div
      slot="content"
      class="flex items-center content-center overflow-hidden w-full bg-gray-900 h-full"
      style="height: 250px"
    >
      <Tab id="1" {selected}>
        <Image
          alt="kitten 1"
          class="w-full"
          src="https://placekitten.com/400/250"
          width="400"
          height="250"
        />
      </Tab>
      <Tab id="2" {selected}>
        <Image
          alt="kitten 1"
          class="w-full"
          src="https://placekitten.com/400/251"
          width="400"
          height="250"
        />
      </Tab>
        <Tab id="3" {selected}>
        <Image
          alt="kitten 3"
          class="w-full"
          src="https://placekitten.com/400/253"
          width="400"
          height="250"
        />
      </Tab>
  </Tabs>
</div>