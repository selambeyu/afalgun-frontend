<Tabs
                indicatorColor="primary"
                onChange={handleTabsChange}
                textColor="primary"
                value={currentTab}
                variant="scrollable"
              >
                {tabs.map((tab) => (
                  <Tab key={tab.value} label={tab.label} value={tab.value} />
                ))}
              </Tabs>

              {currentTab === "general" && <p>Generl</p>}
              {currentTab === "billing" && <p>billing</p>}
              {currentTab === "team" && <p>team</p>}
              {currentTab === "notifications" && <p>notification</p>}